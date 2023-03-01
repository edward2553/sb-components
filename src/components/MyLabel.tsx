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

   /**
   * Background Color of the label
   */
   backgroundColor?: string;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  backgroundColor = 'transparent',
}: Props) => {
  return (
    <span style={{ color: fontColor, backgroundColor, padding: 10, borderRadius: 5 }} className={`label ${size} text-${color}`}>
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
