export interface CheckResult {
  name: string;
  success: boolean;
}

export class Doctor {
  private results: CheckResult[] = [];

  check(name: string, success: boolean) {
    this.results.push({
      name,
      success,
    });
  }

  render() {
    console.clear();

    console.log("╔══════════════════════════════════════════════════════╗");
    console.log("║                  AVSS HEALTH CHECK                 ║");
    console.log("╠══════════════════════════════════════════════════════╣");

    for (const item of this.results) {
      const status = item.success ? "🟢 PASS" : "🔴 FAIL";

      console.log(
        `║ ${item.name.padEnd(18)} ${status.padEnd(31)}║`
      );
    }

    console.log("╠══════════════════════════════════════════════════════╣");

    const passed = this.results.filter(r => r.success).length;
    const failed = this.results.length - passed;

    console.log(
      `║ PASS : ${String(passed).padEnd(42)}║`
    );

    console.log(
      `║ FAIL : ${String(failed).padEnd(42)}║`
    );

    console.log(
      `║ STATUS : ${(failed === 0 ? "ALL TEST PASSED 🎉" : "FAILED ❌").padEnd(35)}║`
    );

    console.log("╚══════════════════════════════════════════════════════╝");
  }
}

export const doctor = new Doctor();