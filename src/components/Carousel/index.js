import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink, SectionTitle } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>

      {categoryTitle && (
        <SectionTitle style={{ borderColor: categoryColor || 'red' }}>
          <>
              {/* <Title style={{ backgroundColor: categoryColor || 'red' }}>
                {categoryTitle}
              </Title> */}
              <Title>
                {categoryTitle}
              </Title>
              {categoryExtraLink && 
                <ExtraLink href={categoryExtraLink.url} target="_blank">
                  {categoryExtraLink.text}  
                </ExtraLink>
              }
          </>
        </SectionTitle>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
