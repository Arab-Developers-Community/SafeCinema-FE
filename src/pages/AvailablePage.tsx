import Stack from "@mui/material/Stack";
import { genreSliceEndpoints, useGetGenresQuery } from "src/store/slices/genre";
import { MEDIA_TYPE } from "src/types/Common";

import store from "src/store";
import SlickSlider from "src/components/slick-slider/SlickSlider";

export async function loader() {
  await store.dispatch(
    genreSliceEndpoints.getGenres.initiate(MEDIA_TYPE.Movie)
  );
  return null;
}
const results = {"dates":{"maximum":"2024-05-29","minimum":"2024-04-17"},"page":1,"results":[{"adult":false,"backdrop_path":"/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg","genre_ids":[878,28,12],"id":944947,"original_language":"en","original_title":"Game Of Thrones: Demo","overview":"Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.","popularity":4619.309,"poster_path":"/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg","release_date":"2024-03-27","title":"Game of Thrones Demo","video":false,"vote_average":7.283,"vote_count":2158}],"total_pages":253,"total_results":5046};

export function Component() {
  const { data: genres, isSuccess } = useGetGenresQuery(MEDIA_TYPE.Movie);
  (window as any).localStorage.setItem("LatestPage", "available")
  if (isSuccess && genres && genres.length > 0) {
    return (
      <Stack spacing={10}>
       <div style={{padding: "8rem 0 30rem 0"}}>
        <SlickSlider data={results as any} genre={{id: 28, name: "Available Now"}}/>
       </div>
      </Stack>
    );
  }
  return null;
}

Component.displayName = "HomePage";
