"""Serve the local preview without retaining stale scripts or images."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(Path(__file__).resolve().parent.parent), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    print("Prévia: http://127.0.0.1:5173", flush=True)
    ThreadingHTTPServer(("127.0.0.1", 5173), PreviewHandler).serve_forever()
