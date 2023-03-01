import './myLabel.css';

export interface Props {
  /**
   * The message that will be shown on the label
   */
  label: string;
  
  /**
   * The size of the label
   * */
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Capitalize the label
   */
  allCaps?: boolean;

  /**
  * Color of the label 
  */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Custom font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
}: Props) => {
  return (
    <span style={{ color: fontColor }} className={`label ${size} text-${color}`}>
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
