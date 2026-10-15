# Global Group - Official Corporate Portal
**Apex Diversified Conglomerate of Sri Lanka**
*Operating 14 Strategic Subsidiaries across South Asia*

---

## 🏛️ Project Overview
This website is crafted specifically for **Global Group**, designed with a **Unilever-inspired corporate architecture** and an executive **Black & Crimson Red luxury theme**.

### 🌟 Key Features
- **14 Subsidiary Showcase:** 
  - Complete list matching the official group business card.
  - High-resolution photography for every single subsidiary.
  - Interactive Filter tabs (Finance & Wealth, Hospitality & Leisure, Education, Trade & Retail, Automotive & Mobility, Green Agriculture).
  - Instant live search.
  - Interactive Modal popup with company competencies and "Visit Subsidiary Portal" buttons.
- **Executive Leadership & Board of Directors:**
  - Dedicated page: `leadership.html`
  - Spotlight on **Chairman Dr. Sampath Bandara** (PhD in Education, MBA, MED, BSc).
  - Spotlight on **CEO Dr. Asanka Weerasinghe** (PhD in Management, PGD in Business Management, B.Sc (Mgt)(Pub)SP, Honce, ICA (f), LICA).
  - Fully **modular architecture** allowing future directors and executives to be added in seconds.
- **Bilingual Support (EN / සිංහල):**
  - Instant toggle between English and Sinhala navigation.
- **Direct Headquarters Integration:**
  - Integrated with Dalugama Corporate Center, Kelaniya.
  - Instant WhatsApp direct inquiry button dispatching customized messages to `+94 76 666 7807`.

---

## 🚀 How to Host Permanently (Never Expires - 100% Free Forever)

The website is built with **Pure HTML5, Vanilla CSS3, and modern Vanilla JavaScript**. It contains **no server dependencies** and will **NEVER EXPIRE**.

### Option 1: GitHub Pages (Recommended - 100% Free Forever)
1. Go to [github.com](https://github.com) and create a free account.
2. Create a new repository named `global-group` (set to **Public**).
3. Upload all the files inside this `Global Group` folder.
4. Go to **Settings** > **Pages** > Select `Branch: main`, `Folder: / (root)` > Click **Save**.
5. Your website will be live at `https://<your-username>.github.io/global-group/` permanently, 24/7/365, with free SSL (https).

### Option 2: Netlify (Drag & Drop - 30 Seconds)
1. Go to [netlify.com](https://www.netlify.com/) and log in.
2. Drag and drop the `Global Group` folder into Netlify.
3. Your site is live immediately with a free custom subdomain and SSL.

### Option 3: Local Offline Viewing (Anytime)
- You can simply double-click `index.html` on any computer or phone to view the entire website offline, with zero internet required.

---

## 👥 How to Add New Board Members / Directors Later
Open `script.js` in any text editor (like Notepad, VS Code), locate `leadershipData`, and append a new member object:

```javascript
{
  id: "director-name",
  name: "Mr. / Dr. Full Name",
  role: "Director of Operations / Board Member",
  qualifications: "MBA, B.Sc, M.Sc",
  portrait: "assets/leadership/your-photo.jpg",
  banner: "assets/leadership/your-photo.jpg",
  bio: "Brief description of the director's responsibilities and vision...",
  focus: ["Strategic Planning", "International Trade", "Governance"]
}
```
Save the file, and `leadership.html` will automatically format and display the new leader!
