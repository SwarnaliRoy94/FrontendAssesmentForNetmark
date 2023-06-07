"use client";

import { ReactNode, useState, Children, ReactElement } from "react";
import styles from "./expandable.module.css";
import { FaChevronCircleUp } from "react-icons/fa";

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
  icon: any;
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

  const header = childrenArray.find(
    (child: any) => child.type.name === childrenType.HEADER
  );

  const icon = childrenArray.find(
    (child: any) => child.type.name === childrenType.ICON
  );

  const body = childrenArray.find(
    (child: any) => child.type.name === childrenType.BODY
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerStyle} onClick={toggle}>
        <div>{header?.props.children}</div>
        <div>{isOpen ? <FaChevronCircleUp color="grey"  /> : icon?.props.icon}</div>
      
      </div>
      {isOpen && (
        <div className={styles.bodyStyle}>
          <div>{body?.props.children}</div>
        </div>
      )}
    </div>
  );
};

const Icon = ({ icon }: ExpandableIconProps) => {
  return <div>{icon}</div>;
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
