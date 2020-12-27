// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Speech from "utils/Speech";
export default (req, res) => {
  res.statusCode = 200;
  res.json(Speech);
};
