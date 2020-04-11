import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {PageContainer} from '../components/common/PageContainer';
import * as Navigation from '../services/Navigation';

export const Recipe = () => (
  <PageContainer>
    <TouchableOpacity onPress={() => Navigation.goBack()}>
      <Text>Recipe</Text>
    </TouchableOpacity>
  </PageContainer>
);
