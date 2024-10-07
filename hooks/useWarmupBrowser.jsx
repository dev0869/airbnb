import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Pre-load the web browser resources
    void WebBrowser.warmUpAsync()

    // Cleanup function to release resources
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []); // Empty dependency array to run once when mounted
};
