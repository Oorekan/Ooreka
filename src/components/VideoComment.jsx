import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoComment = () => {
  const [videoComment, setVideoComment] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(
      `commentThreads?part=snippet&videoId=${id}&maxResults=10`
    ).then((data) => setVideoComment(data.items));
  }, [id]);

  console.log(videoComment);
  if (!videoComment?.snippet) return 'Loading...';

  return (
    <Box>
      <Box>
        {videoComment.map((comment) => (
          <Typography>
            {comment.snippet?.topLevelComment?.snippet?.textDisplay}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default VideoComment;
