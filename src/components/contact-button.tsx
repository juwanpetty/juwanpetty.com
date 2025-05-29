"use client";

export function ContactButton() {
  function copyEmailToClipboard() {
    const email = "jchpetty@gmail.com";

    navigator.clipboard.writeText(email).then(
      () => {
        /* clipboard successfully set */
      },
      () => {
        /* clipboard write failed */
      }
    );
  }

  return (
    <button
      type="button"
      onClick={copyEmailToClipboard}
      className="flex h-8 items-center rounded-full bg-white px-2.5 text-sm font-medium"
    >
      Contact
    </button>
  );
}
