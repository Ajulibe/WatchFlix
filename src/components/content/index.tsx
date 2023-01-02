/*eslint-disable*/
import React, { ChangeEvent, MutableRefObject } from "react";
import {
  Empty,
  FlexContainer,
  MovieWrapper,
  Title,
  CurlyTitle,
  TitleWrapper,
  VideoWrapper
} from "./style";
import { CardWidget } from "components/card";
import { Spinner } from "components/spinner";
import type { Results } from "types";
import { SearchBar } from "components/searchInput";

interface IProps {
  isLoading: boolean;
  data: Results[];
  isMounted: MutableRefObject<boolean>;
  showModal: (i: Results) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Video = () => {
  const src =
    "https://res.cloudinary.com/ajulibe/video/upload/v1672667722/Holiday_-_140483_u6gbba.mp4";
  return (
    <VideoWrapper>
      <video controls width="100%" autoPlay muted playsInline>
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </VideoWrapper>
  );
};

const Content: React.FC<IProps> = ({ isLoading, data, isMounted, showModal, handleChange }) => {
  return (
    <FlexContainer>
      <TitleWrapper>
        <CurlyTitle>watch</CurlyTitle>
        <Title>Flix</Title>
      </TitleWrapper>
      <SearchBar onChange={handleChange} />
      <MovieWrapper>
        {!isLoading &&
          data.map((item) => {
            return (
              <CardWidget
                key={item.id}
                item={item}
                onClick={() => {
                  showModal(item);
                }}
              />
            );
          })}

        {data.length === 0 && !isLoading && isMounted.current ? (
          <Empty data-testid="error-message">NO RESULTS FOUND</Empty>
        ) : null}

        {!isMounted.current && !isLoading && data.length === 0 ? <Video /> : null}

        {isLoading && <Spinner />}
      </MovieWrapper>
    </FlexContainer>
  );
};

export default Content;
