export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const dView = new DataView(buffer);
  dView.setInt8(position, value);

  return dView;
}
