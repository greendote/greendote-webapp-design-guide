export default class URLSearchPathnames {
  pathname: string;
  constructor(pathname: string) {
    this.pathname = pathname;
  }

  pathnames(path: string): Record<string, string> | null {
    const pathname = this.pathname;
    const data: Record<string, string> = {};

    if (!pathname || !path || path === '' || pathname === '') {
      return null;
    }

    const source = pathname.replace(/^\//, '').split('/');

    path
      .replace(/^\//, '')
      .split('/')
      .forEach((o, i) => {
        if (o.startsWith(':')) {
          const name = o.replaceAll(':', '');
          data[name] = source[i];
        }
      });

    return data;
  }
}
