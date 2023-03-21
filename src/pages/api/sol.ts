import { promises as fs } from "fs";
import { nanoid } from "nanoid";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const jsonDirectory = path.join(process.cwd(), "data");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Sol[]>
) {
  if (req.method === "GET") {
    const sols = JSON.parse(
      await fs.readFile(`${jsonDirectory}/solutions.json`, "utf-8")
    ) as unknown as Sol[];

    res.status(200).json(sols);
  }

  if (req.method === "POST") {
    const newSols: PostSolReqBody = req.body;

    const sols = JSON.parse(
      await fs.readFile(`${jsonDirectory}/solutions.json`, "utf-8")
    ) as unknown as Sol[];

    sols.push({
      id: nanoid(),
      author: newSols.author,
      code: newSols.code,
      probId: newSols.probId,
      createdAt: +newSols.createdAt,
      lang: newSols.lang
    });

    await fs.writeFile(
      `${jsonDirectory}/solutions.json`,
      JSON.stringify(sols),
      {
        encoding: "utf-8"
      }
    );

    res.status(200).json(sols);
  }
  if (req.method === "DELETE") {
    const { solId } = req.query as { solId: string };

    const sols = JSON.parse(
      await fs.readFile(`${jsonDirectory}/solutions.json`, "utf-8")
    ) as unknown as Sol[];

    const newSols = sols.filter(sol => sol.id !== solId);

    await fs.writeFile(
      `${jsonDirectory}/solutions.json`,
      JSON.stringify(newSols),
      {
        encoding: "utf-8"
      }
    );

    res.status(200).json(sols);
  }
}

export type Sol = {
  id: string;
  author: string;
  code: string;
  probId: string;
  createdAt: ReturnType<typeof Date.now>;
  lang: "JavaScript" | "Python";
};

export type PostSolReqBody = Omit<Sol, "id">;
