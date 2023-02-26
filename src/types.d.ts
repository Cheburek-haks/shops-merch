declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.svg" {
  const value: string;
  export default value;
}
