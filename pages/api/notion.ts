import type { NextApiRequest, NextApiResponse } from 'next'
import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExtendedRecordMap>
) {
  const notion = new NotionAPI()

  const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')

  res.status(200).json(recordMap)
}
