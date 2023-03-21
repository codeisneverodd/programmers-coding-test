import * as cheerio from "cheerio";
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const COURSE_URL = "https://programmers.co.kr/learn/courses/30";
const jsonDirectory = path.join(process.cwd(), "data");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Prob[]>
) {
  if (req.method === "GET") {
    const fileContents = await fs.readFile(
      `${jsonDirectory}/problems.json`,
      "utf-8"
    );
    const probs = JSON.parse(fileContents) as unknown as Prob[];

    res.status(200).json(probs);
  }
  if (req.method === "POST") {
    const $ = cheerio.load(await (await fetch(COURSE_URL)).text());
    const probs: Prob[] = [];
    const sols = JSON.parse(
      await fs.readFile(`${jsonDirectory}/solutions.json`, "utf-8")
    );

    $(".lesson-title").each((i, $node) => {
      const title = $($node).children("span").text().trim();
      const link = $($node).attr("href");
      const id = link?.split("/").at(-1) ?? "";
      probs.push({
        title,
        id,
        solvedCount: sols.filter((sol: any) => sol.probId === id).length
      });
    });

    await fs.writeFile(
      `${jsonDirectory}/problems.json`,
      JSON.stringify(probs),
      {
        encoding: "utf-8"
      }
    );

    const fileContents = await fs.readFile(
      `${jsonDirectory}/problems.json`,
      "utf-8"
    );

    res.status(200).json(JSON.parse(fileContents) as unknown as Prob[]);
  }
}

export type Prob = { id: string; title: string; solvedCount: number };
