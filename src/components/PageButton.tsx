import React from 'react';

type Props = {
  isBold: boolean;
  name: string;
};

const PageButton = ({ isBold, name }: Props) => {
  return (
    <div className="btn">
      <span className={isBold ? 'pageButtonBold hoverBold' : 'hoverBold'}>
        {name}
      </span>
    </div>
  );
};

export default PageButton;
