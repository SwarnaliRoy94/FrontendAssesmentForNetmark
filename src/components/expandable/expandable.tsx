"use client";

import { ReactNode, Children } from "react";
import styles from "./expandable.module.css";

enum childrenType {
  HEADER = "Header",
  ICON = "Icon",
  BODY = "Body",
}

interface ExpandableProps {
  children: ReactNode;
  isOpen: boolean;
  updateItemId: () => void;
}
interface ExpandableIconProps {
  openIcon: any;
  closeIcon: any;
}

interface ExpandableHeaderProps {
  children: ReactNode;
}

interface ExpandableBodyProps {
  children: ReactNode;
}

const Expandable = ({ children, isOpen, updateItemId }: ExpandableProps) => {
  const toggle = () => {
    updateItemId();
  };

  const childrenArray = Children.toArray(children);

  const header: any = childrenArray.find(
    (child: any) => child.type.name === childrenType.HEADER
  );

  const icon: any = childrenArray.find(
    (child: any) => child.type.name === childrenType.ICON
  );

  const body: any = childrenArray.find(
    (child: any) => child.type.name === childrenType.BODY
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerStyle} onClick={toggle}>
        <div>{header?.props.children}</div>
        <div>{isOpen ? icon?.props.closeIcon : icon?.props.openIcon}</div>
      </div>
      {isOpen && (
        <div className={styles.bodyStyle}>
          <div>{body?.props.children}</div>
        </div>
      )}
    </div>
  );
};

const Icon = ({ openIcon, closeIcon }: ExpandableIconProps) => {
  return <div />;
};
Expandable.Icon = Icon;

const Header = ({ children }: ExpandableHeaderProps) => {
  return <div>{children}</div>;
};
Expandable.Header = Header;

const Body = ({ children }: ExpandableBodyProps) => {
  return <div>{children}</div>;
};
Expandable.Body = Body;

export default Expandable;
