import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {PageContainer} from '../components/common/PageContainer';
import * as Navigation from '../services/Navigation';

export const Home = () => (
  <PageContainer>
    <TouchableOpacity onPress={() => Navigation.navigate('Recipe')}>
      <Text>Home</Text>
    </TouchableOpacity>
  </PageContainer>
);
