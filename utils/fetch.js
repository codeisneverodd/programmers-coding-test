import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

async function fetchBody() {
  const COURSE_URL = 'https://programmers.co.kr/learn/courses/30';
  const response = await fetch(COURSE_URL);
  const body = await response.text();
  return body;
}

export default async function fetchTitleLink() {
  const body = await fetchBody();
  const $ = cheerio.load(body);
  const lesson = {};

  $('.lesson-title').each(function (index, el) {
    const title = $(el).children('span').text();
    const link = $(el).attr('href');
    lesson[title] = link;
  });
  return lesson;
}
