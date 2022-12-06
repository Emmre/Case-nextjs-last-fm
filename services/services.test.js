import * as axios from "axios"

jest.mock("axios")

describe("getTopArtists", () => {
  it("Should return top artists", async () => {
    const topArtists = [
      {
        name: "The Beatles",
        listeners: "123456789",
        mbid: "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
        url: "https://www.last.fm/music/The+Beatles",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge",
          },
        ],
      },
    ]

    axios.get.mockResolvedValue({ data: topArtists })

    const { getTopArtists } = require("./index")

    const result = await getTopArtists(1)

    expect(result).toEqual(topArtists)
  })

  it("Should return top albums", async () => {
    const topAlbums = [
      {
        name: "Abbey Road",
        artist: {
          name: "The Beatles",
          mbid: "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
          url: "https://www.last.fm/music/The+Beatles",
        },
        url: "https://www.last.fm/music/The+Beatles/Abbey+Road",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge",
          },
        ],
        "@attr": {
          rank: "1",
        },
      },
    ]

    axios.get.mockResolvedValue({ data: topAlbums })

    const { getTopAlbums } = require("./index")

    const result = await getTopAlbums(1)

    expect(result).toEqual(topAlbums)
  })
})
