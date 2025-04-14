import { FC } from "react";
import AnimatedCursor from "react-animated-cursor";

interface CursorProps {
  color: string;
}

const Cursor: FC<CursorProps> = ({color}) => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      // hasBlendMode={true}
      innerStyle={{
        backgroundColor: color,
      }}
      outerStyle={{
        border: `1px solid ${color}`,
      }}
      clickables={[
        'a',
        'button',
        'select',
        'input',
        // 'input[type="text"]',
        // 'input[type="email"]',
        // 'input[type="number"]',
        // 'input[type="submit"]',
        // 'input[type="image"]',
        '.link',
        // 'h1',

        // 'label[for]',
        // 'textarea'
      ]}
    />
  );
};

export default Cursor;
