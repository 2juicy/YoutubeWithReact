import shortNumberString from "../number-format";

test("shortNumberString(0)", () => {
  expect(shortNumberString(0).toEqual("0"));
});

test("shortNumberString(6)", () => {
  expect(shortNumberString(6).toEqual("6"));
});

test("shortNumberString(77)", () => {
  expect(shortNumberString(77).toEqual("77"));
});

test("shortNumberString(123)", () => {
  expect(shortNumberString(123).toEqual("123"));
});

test("shortNumberString(1337)", () => {
  expect(shortNumberString(1337).toEqual("1.3K"));
});

test("shortNumberString(7890)", () => {
  expect(shortNumberString(7890).toEqual("7.9K"));
});

test("shortNumberString(10155)", () => {
  expect(shortNumberString(10155).toEqual("10.2K"));
});

test("shortNumberString(10101)", () => {
  expect(shortNumberString(10101).toEqual("10.1K"));
});

test("shortNumberString(10999)", () => {
  expect(shortNumberString(10999).toEqual("11K"));
});

test("shortNumberString(11991)", () => {
  expect(shortNumberString(11991).toEqual("12K"));
});
test("shortNumberString(200000)", () => {
  expect(shortNumberString(200000).toEqual("200K"));
});
test("shortNumberString(555000)", () => {
  expect(shortNumberString(555000).toEqual("555K"));
});

test("shortNumberString(1000000)", () => {
  expect(shortNumberString(1000000).toEqual("1M"));
});

test("shortNumberString(1230000)", () => {
  expect(shortNumberString(1230000).toEqual("1.2M"));
});

test("shortNumberString(421000000)", () => {
  expect(shortNumberString(421000000).toEqual("421M"));
});
