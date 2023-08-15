import { ProjectExploreBanner } from "@/types/explorer";
import React from "react";
import { GrantsCarousel } from "../carousel/grants";
import { Center, Skeleton, VStack } from "@/utils/chakra";
import FundingRoundBanner from "./FundingBanner";
import { RoundsCarouselLoadingState } from "./LoadingState";

interface Props {
  banner: ProjectExploreBanner[];
}
export const ExploreBanner = ({ banner }: Props) => {
  return (
    <>
      <VStack w="full">
        <GrantsCarousel>
          {banner ? (
            banner?.map((resource_distribution_event) => (
              <FundingRoundBanner
                key={resource_distribution_event.id}
                startDate={new Date(resource_distribution_event.startTime)}
                endDate={new Date(resource_distribution_event.endTime)}
                id={resource_distribution_event.id}
                name={resource_distribution_event.name}
                description={
                  resource_distribution_event?.shortDescription || ""
                }
                matchingPool={resource_distribution_event.matchingPool}
              />
            ))
          ) : (
            <>
              <RoundsCarouselLoadingState />
              <Center w="full" py="16px">
                <Skeleton w="12rem" height="6px" />
              </Center>
            </>
          )}
        </GrantsCarousel>
      </VStack>
    </>
  );
};