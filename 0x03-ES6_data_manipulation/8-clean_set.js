export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  let result = '';
  set.forEach((elem) => {
    if (elem && elem.startsWith(startString)) {
      result += `${elem.slice(startString.length)}-`;
    }
  });

  return result.slice(0, result.length - 1);
}
