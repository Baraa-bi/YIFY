import React, {createContext, useCallback, useMemo, useState} from 'react';
import {View, StyleSheet} from 'react-native';

export const LoadingContext = createContext({
  loading: false,
  setLoading: (value: boolean) => value,
});

export const LoadingProvider = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const setLoading = useCallback(
    (visible: any) => {
      setIsVisible(visible);
    },
    [setIsVisible],
  );
  const contextValue = useMemo(() => {
    return {loading: isVisible, setLoading} as any;
  }, [isVisible]);
  return (
    <LoadingContext.Provider value={contextValue}>
      {props.children}
    </LoadingContext.Provider>
  );
};

const LoadingComponent = () => (
  <LoadingContext.Consumer>
    {(props: any) => !!props.loading && <Loading />}
  </LoadingContext.Consumer>
);
export const Loading = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,.4)',
  },
  loader: {
    height: 200,
  },
});

export default LoadingComponent;
