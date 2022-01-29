import * as React from "react";
import { TouchableOpacity } from "react-native";
import { ScreenContainer } from "../../../SharedComponent/src/ScreenContainer";
import { Flatlist as FlatList } from "../../../SharedComponent/src/baseComponents/Flatlist";
import { Fontsize as FontSize } from "../../../SharedComponent/src/constant/Fontsize";
import { FlatListItem } from "../../../SharedComponent/src/styles/SharedStyles";
import { Text } from "@ui-kitten/components/ui/text/text.component";
import { IconName } from "../constant/IconName";
import { IconButton } from "../component/IconButton";
import { dummyQuotes } from "../constant/DummyData";
import { QuoteDTO } from "../DTO/Quote";
export interface BookQuotesProps {}

/**
 * TODO: if title is empty
 * take first word of text and show that as the title
 * dont show the first word in the text snippet
 * @param props
 * @returns
 */

export function BookQuotes(props: BookQuotesProps) {
  const renderItem = (item: QuoteDTO) => {
    return (
      <FlatListItem.Item>
        <TouchableOpacity>
          <FlatListItem.Row>
            <FlatListItem.Column flex={6}>
              <Text category={FontSize.H6}>{item.title}</Text>
              <Text category={FontSize.S1}>{item.createdDate.toLocaleDateString()}</Text>
              <Text category={FontSize.S1}>{item.text.substring(0, 40).trimEnd().concat("...")}</Text>
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
      <FlatList<QuoteDTO>
        items={dummyQuotes}
        renderItem={(x) => renderItem(x.item)}
        keyExtractor={(item, index) => item.id}
      />
    </ScreenContainer>
  );
}
