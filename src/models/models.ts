export interface IFeatureTab {
  header: string;
  items: IFeatureItem[];
}

export interface IFeatureItem {
  icon: string;
  text: string;
}

export interface IStatItem {
  statValue: string;
  text: string | JSX.Element;
}

export interface IHeading {
  title: string;
  subTitle: string | JSX.Element;
}
