declare module '*.module.less' {
    const classes: { readonly [key: string]: string }
    export default classes
  }

  declare module '*.svg' {
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    const src: string
    export default src
  }