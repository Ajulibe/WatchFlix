import { Box, Stack, Text } from "@chakra-ui/react";
import React, { forwardRef, useState } from "react";

import { StarIcon } from "@chakra-ui/icons";

interface RatingProps {
  size: number;
  icon: string;
  scale: number;
  fillColor: string;
  strokeColor: string;
  className: string;
}

const Rating = forwardRef<HTMLInputElement, RatingProps>(
  ({ size, icon, scale, fillColor, strokeColor, className }, ref) => {
    const [rating, setRating] = useState<number>(0);
    const buttons: JSX.Element[] = [];

    const onClick = (idx: number): void => {
      if (!isNaN(idx)) {
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
      }
    };

    const RatingIcon = ({ fill }: { fill: boolean }): JSX.Element => {
      return (
        <StarIcon
          name={icon}
          fontSize={`${size}px`}
          color={fillColor}
          stroke={strokeColor}
          onClick={() => onClick(1)}
          fillOpacity={fill ? "100%" : "0"}
        />
      );
    };

    const RatingButton = ({ idx, fill }: { idx: number; fill: boolean }): JSX.Element => {
      return (
        <Box
          aria-label={`Rate ${idx}`}
          height={`${size}px`}
          width={`${size / 2}px`}
          className={className}
          mx={1}
          onClick={() => onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </Box>
      );
    };

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return (
      <Stack
        isInline
        mt={8}
        justify="left"
        sx={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <input name="rating" type="hidden" value={rating} ref={ref} />
        {buttons}
        <Box width={`${size * 1.5}px`} textAlign="left" display={"flex"} flexDir={"column"}>
          <Text fontSize="2xl" fontWeight="semibold" lineHeight="1.2em">
            {rating}
          </Text>
        </Box>
      </Stack>
    );
  }
);

Rating.displayName = "Rating";

export default Rating;
