import { TuiContextWithImplicit } from '@taiga-ui/cdk/interfaces';
export class NgIntersectionObserverContext<T = unknown>
  implements TuiContextWithImplicit<T>
{
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  public $implicit: T = null!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  public ngIf: T = null!;
}
