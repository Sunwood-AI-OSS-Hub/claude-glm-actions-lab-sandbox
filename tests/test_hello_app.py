"""Tests for hello_app package."""

import unittest
import subprocess
import sys


class TestHelloApp(unittest.TestCase):
    """Test cases for hello_app."""

    def test_hello_app_normal_execution(self):
        """Test that python -m hello_app outputs 'Hello' correctly.

        This test verifies:
        - The output is exactly "Hello"
        - The exit code is 0 (success)
        - No stderr output is produced
        """
        result = subprocess.run(
            [sys.executable, "-m", "hello_app"],
            capture_output=True,
            text=True,
        )

        self.assertEqual(result.stdout.strip(), "Hello",
                        "Expected output to be 'Hello'")
        self.assertEqual(result.returncode, 0,
                        "Expected exit code 0 for success")
        self.assertEqual(result.stderr, "",
                        "Expected no stderr output")

    def test_hello_app_handles_broken_stdout(self):
        """Test that hello_app handles stdout errors gracefully.

        This test simulates a scenario where stdout is closed or unavailable.
        The application should handle this gracefully and return a non-zero exit code.
        """
        result = subprocess.run(
            [sys.executable, "-c",
             "import sys; sys.stdout.close(); "
             "from hello_app import __main__; sys.exit(__main__.main())"],
            capture_output=True,
            text=True,
        )

        # Should fail gracefully with non-zero exit code
        self.assertNotEqual(result.returncode, 0,
                           "Expected non-zero exit code when stdout is broken")

        # Should produce an error message on stderr
        self.assertTrue(len(result.stderr) > 0 or "Error" in result.stderr,
                       "Expected error message on stderr")


if __name__ == "__main__":
    unittest.main()
