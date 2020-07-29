import {
  TappedMainArtworkGridArgs,
  tappedMainArtworkGrid,
} from "../TappedMainArtworkGrid"
import { OwnerType } from "../../../Schema"

describe("clickedEntityGroup", () => {
  let args: TappedMainArtworkGridArgs
  beforeEach(() => {
    args = {
      contextPageOwnerType: OwnerType.home,
      destinationPageOwnerId: "5359794d1a1e86c3740001f7",
      destinationPageOwnerSlug: "andy-warhol-flower",
    }
  })
  it("Works with minimal args", () => {
    const event = tappedMainArtworkGrid(args)

    expect(event).toEqual({
      action: "tappedMainArtworkGrid",
      context_module: "artworkGrid",
      context_page_owner_id: undefined,
      context_page_owner_slug: undefined,
      context_page_owner_type: "home",
      destination_page_owner_id: "5359794d1a1e86c3740001f7",
      destination_page_owner_slug: "andy-warhol-flower",
      destination_page_owner_type: "artwork",
      type: "thumbnail",
    })
  })

  it("Works with all args", () => {
    const event = tappedMainArtworkGrid({
      ...args,
      contextPageOwnerId: "5359794d1a1e86c3740001f6",
      contextPageOwnerSlug: "andy-warhol",
      contextPageOwnerType: OwnerType.artist,
    })

    expect(event).toEqual({
      action: "tappedMainArtworkGrid",
      context_module: "artworkGrid",
      context_page_owner_id: "5359794d1a1e86c3740001f6",
      context_page_owner_slug: "andy-warhol",
      context_page_owner_type: "artist",
      destination_page_owner_id: "5359794d1a1e86c3740001f7",
      destination_page_owner_slug: "andy-warhol-flower",
      destination_page_owner_type: "artwork",
      type: "thumbnail",
    })
  })
})
