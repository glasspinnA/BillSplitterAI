import * as React from "react";
import { TouchableOpacity } from "react-native";
import { ScreenContainer } from "../../../SharedComponent/src/ScreenContainer";
import { Flatlist as FlatList } from "../../../SharedComponent/src/baseComponents/Flatlist";
import { Fontsize as FontSize } from "../../../SharedComponent/src/constant/Fontsize";
import { FlatListItem } from "../../../SharedComponent/src/styles/SharedStyles";
import { Text } from "@ui-kitten/components/ui/text/text.component";
import { BookDTO } from "../DTO/Book";
import { IconName } from "../constant/IconName";
import { IconButton } from "../component/IconButton";
import { dummyBooks } from "../constant/DummyData";

export interface QuotesProps {}

export function BookScreen(props: QuotesProps) {
  const renderItem = (item: BookDTO) => {
    return (
      <FlatListItem.Item>
        <TouchableOpacity>
          <FlatListItem.Row>
            <FlatListItem.Column flex={6}>
              <Text category={FontSize.H6}>{item.title}</Text>
              <Text category={FontSize.S1}>{item.author}</Text>
            </FlatListItem.Column>
            <FlatListItem.Column>
              <Text category={FontSize.S1}>{item.numberQuotes}</Text>
            </FlatListItem.Column>
            <FlatListItem.Column>
              <IconButton iconName={IconName.chevron_right} onPress={null} />
            </FlatListItem.Column>
          </FlatListItem.Row>
        </TouchableOpacity>
      </FlatListItem.Item>
    );
  };

  return (
    <ScreenContainer>
      <FlatList<BookDTO>
        items={dummyBooks}
        renderItem={(x) => renderItem(x.item)}
        keyExtractor={(item, index) => item.id}
      />
    </ScreenContainer>
  );
}
