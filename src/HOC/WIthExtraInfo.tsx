import { useState, ComponentType, FC } from "react";

type ExtraInfoType = {
  extraInfo: string;
};

type HOCType = <P>(c: ComponentType<P & ExtraInfoType>) => FC<P>;

export const WithExtraInfo2: HOCType = (Component) => (props) => {
  const [extraInfo, setExtraInfo] = useState("info");
  setExtraInfo("set new info");

  return <Component {...props} extraInfo={extraInfo} />;
};

// export const WithExtraInfo = <P extends Record<string, any>>(
//   WrappedComponent: React.ComponentType<P & ExtraInfoType>
// ) => {
//   const ComponentWithExtraInfo = (props: P) => {
//     const [extraInfo, setExtraInfo] = useState("info");
//     setExtraInfo("set new info");

//     return <WrappedComponent {...props} extraInfo={extraInfo} />;
//   };

//   return ComponentWithExtraInfo;
// };
