import { useState } from 'react';

export default ({
  initialLoading = false,
  initialStatus = {
    success: false,
    error: false,
  },
} = {}) => {
  const [status, setStatus] = useState(initialStatus);

  const [loading, setLoading] = useState(initialLoading);

  return [{
    loading,
    status,
  }, {
    setLoading,
    setStatus,
  }];
};
