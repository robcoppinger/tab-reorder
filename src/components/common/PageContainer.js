import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const PageContainer = ({children}) => (
  <RootContainer>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>{children}</SafeAreaView>
  </RootContainer>
);

const RootContainer = styled.View`
  background-color: #fbfbfb;
  flex: 1;
`;
