import test from "node:test";
import assert from "node:assert/strict";
import { keys, loadProgress, saveProgress } from "../src/progress.js";
import { days } from "../src/content/daniel-21-dias.js";

const storageFor = (values) => ({ getItem: (key) => values[key] ?? null });

test("restores valid existing progress using the original keys", () => {
  assert.deepEqual(
    loadProgress(
      storageFor({
        [keys.done]: "[1,3]",
        [keys.active]: "3",
        [keys.period]: "noite",
      }),
    ),
    { done: [1, 3], active: 3, period: "noite", available: true },
  );
});

test("discards duplicates and invalid days, and resumes at the first incomplete day", () => {
  assert.deepEqual(
    loadProgress(
      storageFor({
        [keys.done]: '[1,1,3,0,22,"2",null,2.5]',
        [keys.active]: "99",
        [keys.period]: "invalid",
      }),
    ),
    { done: [1, 3], active: 2, period: "", available: true },
  );
});

test("malformed storage cannot prevent opening the first day", () => {
  for (const saved of ["{", "{}", "null", "false"]) {
    const state = loadProgress(
      storageFor({ [keys.done]: saved, [keys.active]: "-1" }),
    );
    assert.deepEqual(state.done, []);
    assert.equal(state.active, 1);
  }
});

test("storage access and quota failures allow in-memory use", () => {
  const blocked = {
    getItem() {
      throw new Error("blocked");
    },
    setItem() {
      throw new Error("quota");
    },
  };
  assert.deepEqual(loadProgress(blocked), {
    done: [],
    active: 1,
    period: "",
    available: false,
  });
  assert.equal(loadProgress(undefined).available, false);
  assert.equal(saveProgress(blocked, keys.active, 2), false);
});

test("finishing all days still selects a valid day", () => {
  const state = loadProgress(
    storageFor({ [keys.done]: JSON.stringify(days.map((day) => day[0])) }),
  );
  assert.equal(state.done.length, 21);
  assert.equal(state.active, 21);
});

test("the recovered itinerary covers Daniel 1–12 in order, without verse gaps", () => {
  assert.deepEqual(
    days.map((day) => day[0]),
    Array.from({ length: 21 }, (_, i) => i + 1),
  );
  assert.deepEqual(
    days.filter((day) => day[1] === null).map((day) => day[0]),
    [6, 7, 14],
  );
  const chapterEnds = [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13];
  for (let chapter = 1; chapter <= 12; chapter++) {
    let next = 1;
    for (const day of days.filter((day) => day[1] === chapter)) {
      const match = day[2].match(/^Daniel (\d+):(\d+)–(\d+)$/);
      assert.ok(match);
      assert.equal(Number(match[1]), chapter);
      assert.equal(Number(match[2]), next);
      next = Number(match[3]) + 1;
      assert.ok(
        day
          .slice(3)
          .every((text) => typeof text === "string" && text.length > 0),
      );
    }
    assert.equal(next - 1, chapterEnds[chapter - 1]);
  }
});
