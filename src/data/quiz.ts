import type { Question, Rank } from "../types";

export const questions: Question[] = [
  {
    id: "key",
    numeral: "I",
    chapter: "The Key",
    whisper: "A boutique checkout. A new account. The oldest mistake in a prettier dress.",
    prompt:
      "You're creating an account at a shop you actually like. Which password is doing real work?",
    options: [
      {
        id: "a",
        text: "Rose2024! — memorable, a little spicy, and you use it almost everywhere.",
      },
      {
        id: "b",
        text: "A unique 16+ character passphrase you've never reused, kept in a password manager.",
      },
      {
        id: "c",
        text: "Your birthday plus your cat's name. No one would guess Luna. Except everyone.",
      },
      {
        id: "d",
        text: "Password1! — it has a number and a bang. That's basically Fort Knox.",
      },
    ],
    correctId: "b",
    insight:
      "Reused passwords are one key for your apartment, office, and jewelry box. When one boutique is breached — and boutiques are breached — every other door opens with it. A password manager is not a luxury accessory. It is the accessory.",
    ritual:
      "Install a password manager tonight. Generate a unique passphrase for email and banking first — those two unlock the rest of your life.",
  },
  {
    id: "invitation",
    numeral: "II",
    chapter: "The Invitation",
    whisper: "Urgency is a perfume scammers over-apply.",
    prompt:
      "A text from “your bank”: “Unusual login detected. Verify now” — plus a link. You…",
    options: [
      {
        id: "a",
        text: "Tap it immediately. Better safe than sorry, and it looks official.",
      },
      {
        id: "b",
        text: "Call the number printed in the text. They wouldn't fake a phone number.",
      },
      {
        id: "c",
        text: "Ignore the link. Open the bank app yourself, or type the official site by hand.",
      },
      {
        id: "d",
        text: "Forward it to the group chat and ask if anyone else got it.",
      },
    ],
    correctId: "c",
    insight:
      "Phishing is theater: logos, panic, a countdown. Real banks almost never ask you to “verify” through a texted link. The only safe door is the one you open yourself — the app you installed, the URL you typed.",
    ritual:
      "Make it a reflex: never tap links in money, delivery, or “account locked” messages. Open the app. If it's real, the warning will be waiting there.",
  },
  {
    id: "second-lock",
    numeral: "III",
    chapter: "The Second Lock",
    whisper: "One lock is a courtesy. Two is a standard.",
    prompt: "Two-factor authentication. Which version actually deserves the jewelry box?",
    options: [
      { id: "a", text: "SMS codes to your phone number — simple, classic, everywhere." },
      {
        id: "b",
        text: "An authenticator app or a hardware security key.",
      },
      { id: "c", text: "A code emailed to you. Email is already “your” space." },
      {
        id: "d",
        text: "Security questions: mother's maiden name, first pet, the street you grew up on.",
      },
    ],
    correctId: "b",
    insight:
      "SMS rides on your phone number, and phone numbers can be stolen through SIM-swaps. Security questions are often public knowledge in a world of obituaries and Facebook memories. Authenticator apps and hardware keys stay off the phone network — that's the difference between a latch and a lock.",
    ritual:
      "Turn on an authenticator app (not SMS) for email, Apple/Google, and banking. Save backup codes somewhere analog — a page in a notebook you actually keep.",
  },
  {
    id: "open-salon",
    numeral: "IV",
    chapter: "The Open Salon",
    whisper: "Free Wi-Fi is a complimentary drink from a stranger.",
    prompt:
      "You're at a café. You need your bank balance. The network is CaféGuest_Free. You…",
    options: [
      {
        id: "a",
        text: "Connect and log in. You're only looking, not transferring.",
      },
      {
        id: "b",
        text: "Use cellular data, or a trusted VPN on a network you actually intend to use.",
      },
      {
        id: "c",
        text: "Ask the barista for the password so you know the network is “real.”",
      },
      {
        id: "d",
        text: "Connect anyway if the browser shows a little padlock.",
      },
    ],
    correctId: "b",
    insight:
      "Anyone can name a hotspot CaféGuest_Free. A rogue network can watch what you type, or wait until you sign into something that matters. Checking a balance on public Wi-Fi is counting cash on a crowded sidewalk. Cellular data is the private booth.",
    ritual:
      "Turn off auto-join for open networks. If you must use café Wi-Fi, skip anything with money, medicine, or mail — or put a reputable VPN between you and the room.",
  },
  {
    id: "postcard",
    numeral: "V",
    chapter: "The Postcard",
    whisper: "A live story from the villa is also a live map of an empty house.",
    prompt: "You're posting from a dream trip. What's the smartest way to share it?",
    options: [
      {
        id: "a",
        text: "Tag the villa and post Stories in real time. FOMO is the entire point.",
      },
      {
        id: "b",
        text: "Share with close friends now if you like — post publicly after you've left.",
      },
      {
        id: "c",
        text: "Enable location on every photo. The grid should know where you are.",
      },
      {
        id: "d",
        text: "Live-stream the empty-house tour so everyone feels invited.",
      },
    ],
    correctId: "b",
    insight:
      "Real-time location is an open invitation — to thieves, to people you blocked, to anyone collecting a pattern. Your holiday should not double as a floor plan. Close Friends exists for a reason; delay is a kind of lock.",
    ritual:
      "Audit who can see your Stories and location. Turn off geotagging. If you post travel, post it when the key is back in your own door.",
  },
  {
    id: "mask",
    numeral: "VI",
    chapter: "The Mask",
    whisper: "Chemistry that cannot survive a video call is not chemistry.",
    prompt:
      "A charming stranger never FaceTimes, the photos look a little too editorial, and then comes a request for a “temporary” wire. This is likely…",
    options: [
      { id: "a", text: "A shy romantic with a complicated job. Give it time." },
      { id: "b", text: "A romance scam — catfishing with a payment at the end of the script." },
      { id: "c", text: "A public figure testing loyalty before they reveal themselves." },
      { id: "d", text: "Harmless until money actually moves. Flirting isn't a crime." },
    ],
    correctId: "b",
    insight:
      "Romance scams are industrial now: stolen photographs, practiced intimacy, a crisis that only your kindness can solve. If they cannot video-call, will not meet, and money appears — that is not butterflies. That is a play, and you were cast as the bank.",
    ritual:
      "Reverse-search photos. Insist on a live video before any plan. Never send money, crypto, or gift cards to someone you have not met in the light of day. Love does not invoice.",
  },
  {
    id: "vanity",
    numeral: "VII",
    chapter: "The Vanity",
    whisper: "Clouds have excellent memory. So do “deleted” photos.",
    prompt:
      "You took intimate photos. The most self-respecting way to handle them is…",
    options: [
      {
        id: "a",
        text: "A hidden album on your phone. No one ever looks there.",
      },
      {
        id: "b",
        text: "Default iCloud or Google backup. Convenient is the same as private.",
      },
      {
        id: "c",
        text: "Don't keep them in cloud backups. If they exist at all, use locked local storage — and treat consent as something that can be revoked.",
      },
      {
        id: "d",
        text: "Send them over regular text so they're “not on your phone.”",
      },
    ],
    correctId: "c",
    insight:
      "Texts live on other people's phones. Cloud backups resurrect what you thought you erased. Hidden albums are hidden from guests, not from a stolen device or a shared Apple ID. Intimate images are not a moral failing — they are sensitive data. Encrypt them, or don't keep them. Non-consensual sharing is abuse, and you are allowed to plan as if the future might be unkind.",
    ritual:
      "Check whether Photos/iCloud is backing up nudes. Turn off shared albums and old threads. If an image of you is circulating without consent, look up StopNCII.org and local reporting options — you are not required to handle that alone.",
  },
  {
    id: "voice",
    numeral: "VIII",
    chapter: "The Voice",
    whisper: "Panic is a skeleton key. Slow is a deadbolt.",
    prompt:
      "A “friend” calls, frantic: airport, stolen wallet, could you Apple Cash $400 — she'll settle tonight. You…",
    options: [
      { id: "a", text: "Send it. That's what friends are for, and she sounds exactly like herself." },
      {
        id: "b",
        text: "Hang up. Call her back on a number you already have saved.",
      },
      { id: "c", text: "Send half, as a compromise between love and suspicion." },
      {
        id: "d",
        text: "Ask a trivia question from childhood and send if she answers.",
      },
    ],
    correctId: "b",
    insight:
      "Voice cloning is no longer science fiction, and compromised accounts can text from “her” name. The only verification that counts is a channel you already trust — a callback to a saved number, a family thread, a video that isn't a recording. Urgency is the costume. Your pause is the tell.",
    ritual:
      "Agree on a family code word for money emergencies. When a request involves cash plus panic, you hang up. Always.",
  },
  {
    id: "uncoupling",
    numeral: "IX",
    chapter: "The Uncoupling",
    whisper: "Access is not a vibe. It is a set of keys.",
    prompt:
      "An ex still knows your email password “from when you were together.” The move is…",
    options: [
      { id: "a", text: "Change it eventually, if you remember and if things stay civil." },
      {
        id: "b",
        text: "Change email, banking, and socials now. Enable 2FA. Review recovery emails, sessions, and shared devices.",
      },
      {
        id: "c",
        text: "Leave it. You trust them as a person, even if the relationship ended.",
      },
      { id: "d", text: "Just log out of their iPad. That should cover it." },
    ],
    correctId: "b",
    insight:
      "A breakup is also a security event. Shared Apple IDs, Find My, recovery emails, old laptop logins, joint streaming — these are doors, not memories. Civility does not revoke a password. You can wish someone well and still change the locks the same afternoon.",
    ritual:
      "Run a digital uncoupling: passwords, 2FA, signed-in devices, recovery numbers, shared location, joint credit cards, and photos in shared albums. Do it once, thoroughly, like packing the last box.",
  },
  {
    id: "hidden-eye",
    numeral: "X",
    chapter: "The Hidden Eye",
    whisper: "If an app promises to read a phone in secret, believe the secret — not the promise.",
    prompt:
      "A “find my partner” app can quietly read texts and location. Someone suggests you try it. This is…",
    options: [
      { id: "a", text: "Clever relationship insurance. Trust, but verify." },
      {
        id: "b",
        text: "Stalkerware — often illegal, always a violation, never a love language.",
      },
      { id: "c", text: "Fine if you paid for the premium version. Paid means legitimate." },
      {
        id: "d",
        text: "Acceptable on a phone you bought, because ownership equals permission.",
      },
    ],
    correctId: "b",
    insight:
      "Stalkerware hides, harvests, and reports. In many places it is a crime, including on a phone you pay for. If you feel you need it, the relationship already needs a different kind of help. If you fear it is on your phone, that is a safety issue — not a technical inconvenience.",
    ritual:
      "You do not spy. If you suspect someone is spying on you: don't confront from that device. Use a safe computer or a friend's phone, check for unknown apps and device admin permissions, and contact a local domestic-violence or stalking helpline. Trust the discomfort.",
  },
  {
    id: "padlock",
    numeral: "XI",
    chapter: "The Padlock",
    whisper: "A private conversation can still be a conversation with a liar.",
    prompt: "A padlock and “https” in the browser means…",
    options: [
      {
        id: "a",
        text: "The site is 100% trustworthy and cannot scam you.",
      },
      {
        id: "b",
        text: "The connection is encrypted — not that the site itself is honest.",
      },
      {
        id: "c",
        text: "Your identity is invisible to advertisers, employers, and the site.",
      },
      {
        id: "d",
        text: "Only women-owned companies receive that little lock. Obviously.",
      },
    ],
    correctId: "b",
    insight:
      "HTTPS wraps the journey from you to the site in a sealed envelope. It does not vouch for the sender. A phishing page can wear a padlock. Look at the name in the address bar the way you'd check the seal on a letter — then decide if you know the house.",
    ritual:
      "Before you type a password, read the actual domain. amazon.com is not amaz0n.com, and a lock does not make a counterfeit boutique real.",
  },
  {
    id: "armor",
    numeral: "XII",
    chapter: "The Armor",
    whisper: "Updates are unglamorous on purpose. Armor usually is.",
    prompt: "Your phone keeps asking to install a software update. You…",
    options: [
      { id: "a", text: "Ignore it. Updates always ruin the layout you finally liked." },
      {
        id: "b",
        text: "Install it on a rhythm — especially when it mentions security.",
      },
      { id: "c", text: "Update apps, never the operating system. The OS is “fine.”" },
      {
        id: "d",
        text: "Wait a year so all the bugs are gone and the look has settled.",
      },
    ],
    correctId: "b",
    insight:
      "Most attacks don't invent a new door. They walk through one a patch already closed — on a phone that never installed it. Waiting a year is leaving the garden gate open because you preferred last season's ironwork.",
    ritual:
      "Turn on automatic updates for your phone and laptop. Once a month, check that the OS and your browser actually took. It is five minutes. It is also how professionals stay boringly unhacked.",
  },
];

export const ranks: Rank[] = [
  {
    min: 0,
    max: 4,
    title: "Darling Initiate",
    epithet: "The foyer is candlelit. We saved you a seat.",
    image: "/images/rank-darling.jpg",
    letter:
      "You don't need to be ashamed of what you didn't know — the entire internet was designed to make the unsafe thing feel convenient. You showed up. That is the beginning of taste, and of armor. Start with the rituals below and you will not be the same woman in a month.",
  },
  {
    min: 5,
    max: 7,
    title: "Street-Smart Sister",
    epithet: "Your instincts are awake. Now we sharpen them.",
    image: "/images/rank-smart.jpg",
    letter:
      "You already sense when a message is trying too hard. What you want now is vocabulary — the difference between a latch and a lock, a coincidence and a script. Keep going. The salon loves a woman who is mid-transformation.",
  },
  {
    min: 8,
    max: 10,
    title: "Velvet Guardian",
    epithet: "You already protect yourself — and probably the group chat.",
    image: "/images/rank-guardian.jpg",
    letter:
      "You move through the digital world like a woman who reads the room. A few edges still snag, which is human. Share what you know without lecturing. Guardianship looks like a forwarded warning, a password manager gifted at Christmas, a quiet “hang up and call me back.”",
  },
  {
    min: 11,
    max: 12,
    title: "Cipher Queen",
    epithet: "The Protocol would like a word. You should be teaching.",
    image: "/images/rank-queen.jpg",
    letter:
      "You treat your attention as a limited edition and your data as inheritance. That is not paranoia. That is poise. If you mentor one friend through a password manager and 2FA this week, the circle grows — and so does the number of women who cannot be easily taken.",
  },
];

export function rankFor(score: number): Rank {
  return ranks.find((r) => score >= r.min && score <= r.max) ?? ranks[0];
}
