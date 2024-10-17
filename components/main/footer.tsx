import CTA from "./cta";

function Footer() {
  return (
    <footer className="bg-action-default text-neutral-alt-bg py-8 px-4">
      <div className="container flex items-center justify-between mx-auto">
        {/* ICON */}
        <div className="flex items-center gap-1">
          <div className="bg-white size-[1.5rem] rounded-sm">
            <div className="h-full w-full nav-icon" />
          </div>
          <h2 className="font-bold text-2xl text-white">Thrivr</h2>
        </div>

        <div className="items-center flex">
          <CTA className="bg-white !text-action-default font-semibold" />
        </div>
      </div>

      <hr className="border-b border-b-solid border-b-neutral-borders opacity-20 mt-6"/>
      <p className="mt-4 text-center">
        &copy; {new Date().getFullYear()} Thrivr. All rights reserved.
        </p>
    </footer>
  );
}

export default Footer;
