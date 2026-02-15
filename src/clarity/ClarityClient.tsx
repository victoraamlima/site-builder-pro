import { ClickTracker } from "@/clarity/ClickTracker";
import { RouteTags } from "@/clarity/RouteTags";
import { UtmCollector } from "@/clarity/UtmCollector";

export const ClarityClient = (): JSX.Element => {
  return (
    <>
      <UtmCollector />
      <RouteTags />
      <ClickTracker />
    </>
  );
};
