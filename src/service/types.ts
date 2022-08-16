export default interface IRequestResult<T = any> {
  code: number;
  data: T;
}
