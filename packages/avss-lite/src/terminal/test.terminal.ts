import {
  box,
  divider,
  footer,
  info,
  progress,
  section,
  Spinner,
  success,
  Timer,
  tree,
  warning,
  error,
} from "./index";

async function main(): Promise<void> {
  const timer = new Timer();
  timer.reset();

  box("AVSS TERMINAL ENGINE");

  console.log();

  const spinner = new Spinner("Loading AVSS Lite Framework...");

  spinner.start();

  await new Promise((resolve) => setTimeout(resolve, 1200));

  spinner.success("Framework Loaded");

  console.log();

  section("Core Modules");

  const modules = [
    "Authentication",
    "Security",
    "Logger",
    "Plugins",
    "Errors",
    "Doctor CLI",
    "Terminal",
  ];

  for (const module of modules) {
    success(module);

    // Selalu tampil 100%
    progress(1, 1);

    console.log();
  }

  divider();

  section("Framework Structure");

  tree("AVSS Lite", modules);

  divider();

  info("Framework : AVSS Lite");
  info("Version   : v1.0.0-alpha");
  info(`Runtime   : ${process.version}`);

  console.log();

  warning("No Warning Detected");
  error("Example Error Output");

  console.log();

  console.log(`Completed in ${timer.elapsed()} ms`);

  footer({
    framework: "AVSS Lite",
    version: "v1.0.0-alpha",
  });
}

main().catch(console.error);