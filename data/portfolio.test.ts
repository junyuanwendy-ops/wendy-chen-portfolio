import { describe, expect, it } from "vitest";
import {
  education,
  evidenceLinks,
  experience,
  profile,
  thinkingModes,
} from "./portfolio";

describe("portfolio content", () => {
  it("uses Wendy's professional identity rather than a project-only focus", () => {
    expect(profile.name).toBe("Junyuan (Wendy) Chen");
    expect(profile.positioning).toContain("Accounting");
    expect(profile.positioning).toContain("analytics");
    expect(thinkingModes).toHaveLength(4);
  });

  it("keeps resume facts anchored to the provided resume", () => {
    expect(education[0].school).toContain("University of Southern California");
    expect(education[0].meta).toContain("Expected June 2027");
    expect(experience.map((item) => item.organization)).toContain("BDO USA");
    expect(experience.find((item) => item.organization === "Amazon")?.highlights.join(" ")).toContain("5%+");
  });

  it("keeps projects as supporting evidence across multiple disciplines", () => {
    expect(evidenceLinks.map((item) => item.discipline)).toEqual([
      "Financial modeling",
      "Audit judgment",
      "Cost accounting",
      "Venture finance",
    ]);
  });
});
