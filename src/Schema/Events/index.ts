import {
  AuthImpression,
  CreatedAccount,
  ResetYourPassword,
  SuccessfullyLoggedIn,
} from "./Authentication"
import {
  ClickedArtistGroup,
  ClickedArtistSeriesGroup,
  ClickedArtworkGroup,
  ClickedAuctionGroup,
  ClickedCollectionGroup,
  ClickedFairGroup,
  ClickedMainArtworkGrid,
} from "./Click"
import {
  FocusedOnConversationMessageInput,
  SentConversationMessage,
} from "./Conversations"
import {
  TappedArtistGroup,
  TappedArtistSeriesGroup,
  TappedArtworkGroup,
  TappedAuctionGroup,
  TappedCollectionGroup,
  TappedConsign,
  TappedExploreGroup,
  TappedFairGroup,
  TappedMainArtworkGrid,
  TappedPromoSpace,
  TappedTabBar,
  TappedViewingRoomGroup,
} from "./Tap"
import { TimeOnPage } from "./System"
import { FollowedArtist, UnfollowedArtist } from "./SavesAndFollows"

/**
 * Master list of valid schemas for analytics actions
 *
 * Each event describes one ActionType
 */
export type Event =
  | AuthImpression
  | CreatedAccount
  | ClickedArtistGroup
  | ClickedArtistSeriesGroup
  | ClickedArtworkGroup
  | ClickedAuctionGroup
  | ClickedCollectionGroup
  | ClickedFairGroup
  | ClickedMainArtworkGrid
  | FocusedOnConversationMessageInput
  | FollowedArtist
  | ResetYourPassword
  | SentConversationMessage
  | SuccessfullyLoggedIn
  | TappedArtistGroup
  | TappedArtistSeriesGroup
  | TappedArtworkGroup
  | TappedAuctionGroup
  | TappedCollectionGroup
  | TappedExploreGroup
  | TappedFairGroup
  | TappedConsign
  | TappedMainArtworkGrid
  | TappedPromoSpace
  | TappedTabBar
  | TappedViewingRoomGroup
  | TimeOnPage
  | UnfollowedArtist

/**
 * The top-level actions an Event describes.
 *
 * Each ActionType corresponds with a table in Redshift.
 */
export enum ActionType {
  /**
   * Corresponds to {@link AuthImpression}
   */
  authImpression = "authImpression",
  /**
   * Corresponds to {@link ClickedArtistGroup}
   */
  clickedArtistGroup = "clickedArtistGroup",
  /**
   * Corresponds to {@link ClickedArtistSeriesGroup}
   */
  clickedArtistSeriesGroup = "clickedArtistSeriesGroup",
  /**
   * Corresponds to {@link ClickedArtworkGroup}
   */
  clickedArtworkGroup = "clickedArtworkGroup",
  /**
   * Corresponds to {@link ClickedAuctionGroup}
   */
  clickedAuctionGroup = "clickedAuctionGroup",
  /**
   * Corresponds to {@link ClickedCollectionGroup}
   */
  clickedCollectionGroup = "clickedCollectionGroup",
  /**
   * Corresponds to {@link ClickedFairGroup}
   */
  clickedFairGroup = "clickedFairGroup",
  /**
   * Corresponds to {@link ClickedMainArtworkGrid}
   */
  clickedMainArtworkGrid = "clickedMainArtworkGrid",
  /**
   * Corresponds to {@link CreatedAccount}
   */
  createdAccount = "createdAccount",
  /**
   * Corresponds to {@link FocusedOnConversationMessageInput}
   */
  focusedOnConversationMessageInput = "focusedOnConversationMessageInput",
  /**
   * Corresponds to {@link FollowedArtist}
   */
  followedArtist = "followedArtist",
  /**
   * Corresponds to {@link FollowedGene}
   */
  followedGene = "followedGene",
  /**
   * Corresponds to {@link ResetYourPassword}
   */
  resetYourPassword = "resetYourPassword",
  /**
   * Corresponds to {@link SuccessfullyLoggedIn}
   */
  successfullyLoggedIn = "successfullyLoggedIn",
  /**
   * Corresponds to {@link SentConversationMessage}
   */
  sentConversationMessage = "sentConversationMessage",
  /**
   * Corresponds to {@link TappedArtistGroup}
   */
  tappedArtistGroup = "tappedArtistGroup",
  /**
   * Corresponds to {@link TappedArtistSeriesGroup}
   */
  tappedArtistSeriesGroup = "tappedArtistSeriesGroup",
  /**
   * Corresponds to {@link TappedArtworkGroup}
   */
  tappedArtworkGroup = "tappedArtworkGroup",
  /**
   * Corresponds to {@link TappedAuctionGroup}
   */
  tappedAuctionGroup = "tappedAuctionGroup",
  /**
   * Corresponds to {@link TappedCollectionGroup}
   */
  tappedCollectionGroup = "tappedCollectionGroup",
  /**
   * Corresponds to {@link TappedExploreGroup}
   */
  tappedExploreGroup = "tappedExploreGroup",
  /**
   * Corresponds to {@link TappedFairGroup}
   */
  tappedFairGroup = "tappedFairGroup",
  /**
   * Corresponds to {@link TappedConsign}
   */
  tappedConsign = "tappedConsign",
  /**
   * Corresponds to {@link TappedMainArtworkGrid}
   */
  tappedMainArtworkGrid = "tappedMainArtworkGrid",
  /**
   * Corresponds to {@link TappedPromoSpace}
   */
  tappedPromoSpace = "tappedPromoSpace",
  /**
   * Corresponds to {@link TappedTabBar}
   */
  tappedTabBar = "tappedTabBar",
  /**
   * Corresponds to {@link TappedViewingRoomGroup}
   */
  tappedViewingRoomGroup = "tappedViewingRoomGroup",
  /**
   * Corresponds to {@link TimeOnPage}
   */
  timeOnPage = "timeOnPage",
  /**
   * Corresponds to {@link UnfollowedArtist}
   */
  unfollowedArtist = "unfollowedArtist",
  /**
   * Corresponds to {@link UnfollowedArtist}
   */
  unfollowedGene = "unfollowedGene",
}
