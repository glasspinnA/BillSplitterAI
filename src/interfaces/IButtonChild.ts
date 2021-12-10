export interface IButtonChildProps<T> {
  data: T;
  color?: string;
  isChecked?: boolean;
  index?: number;
  onPress?: (data: T) => void;
}
