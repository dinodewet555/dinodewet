import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ArticleLayout, { type TocItem } from "@/components/article/ArticleLayout";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleH2 from "@/components/article/ArticleH2";
import ArticleH3 from "@/components/article/ArticleH3";
import BodyText from "@/components/article/BodyText";
import KeyTakeaways from "@/components/article/KeyTakeaways";
import QuickAnswer from "@/components/article/QuickAnswer";
import FaqList from "@/components/article/FaqList";
import ContinueReading from "@/components/article/ContinueReading";
import ArticleCTA from "@/components/article/ArticleCTA";
import RelatedServices from "@/components/RelatedServices";
import { buildArticleSchema, type Faq } from "@/lib/seo";
import { bodyTextStyle } from "@/components/article/styles";

const SLUG = "semantic-seo/entity-seo-knowledge-graph";
const URL = `https://dinodewet.co.za/blog/${SLUG}`;
const TITLE = "Entity SEO and the Knowledge Graph: How to Optimise for Entities in 2026";
const PUBLISHED = "2026-06-21";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Entity SEO optimises content for the things search engines understand — people, places, products, and concepts — not keyword strings. Learn the entity-attribute-value model, how Google's Knowledge Graph works, and the signals that make your entities unambiguous.",
  keywords: [
    "entity SEO",
    "knowledge graph",
    "entity-attribute-value",
    "entity optimisation",
    "semantic SEO",
    "Google Knowledge Graph",
    "entity recognition",
    "sameAs schema",
    "topical authority",
    "named entity recognition",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description:
      "How to optimise content for entities and Google's Knowledge Graph — the entity-attribute-value model, entity recognition, and the signals that disambiguate your brand.",
    url: URL,
    type: "article",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "Entity SEO and the Knowledge Graph",
      },
    ],
  },
};

const toc: TocItem[] = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "what-is-entity", label: "What Is an Entity?" },
  { id: "entity-vs-keyword", label: "Entities vs. Keywords" },
  { id: "eav-model", label: "The Entity-Attribute-Value Model" },
  { id: "knowledge-graph", label: "How the Knowledge Graph Works" },
  { id: "signals", label: "Signalling Entities to Search" },
  { id: "architecture", label: "Entity-Based Architecture" },
  { id: "checklist", label: "Entity SEO Checklist" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const keyTakeaways = [
  "An entity is a uniquely identifiable thing — a person, place, organisation, product, or concept — that search engines store and connect in a knowledge graph, independent of the words used to describe it.",
  "Entity SEO shifts optimisation from matching keyword strings to clarifying which real-world things your content is about and how they relate.",
  "Google's Knowledge Graph assigns each entity a stable identifier (a machine ID), so 'Apple the company' and 'apple the fruit' are different nodes regardless of spelling.",
  "The entity-attribute-value model is how machines represent an entity: the thing, its properties, and the values of those properties.",
  "Disambiguation signals — consistent naming, sameAs links to Wikipedia/Wikidata, and about/mentions schema — tell search engines exactly which entity you mean.",
  "Entity-based content architecture (a pillar plus connected supporting pages) builds the topical coverage that earns entity recognition and AI citation.",
  "Entity optimisation is the foundation that semantic SEO, topical maps, and generative engine optimisation all build on.",
];

const entitySignals = [
  "Use one consistent name for each entity across your site, schema, and external profiles — inconsistent naming splits the entity in the engine's understanding.",
  "Add Organization and Person schema with sameAs links to authoritative profiles (Wikipedia, Wikidata, LinkedIn, Crunchbase) to corroborate identity.",
  "Use the about and mentions properties in Article schema to declare the primary entity a page covers and the secondary entities it references.",
  "Define entities explicitly in the opening passage — a clear 'X is a Y that does Z' sentence is the most extractable form for both passage ranking and AI answers.",
  "Cover an entity's key attributes (its properties, relationships, and common questions) across connected pages so coverage is comprehensive, not shallow.",
  "Earn unlinked brand mentions and citations from topically relevant sources — corroboration across the web strengthens an entity's authority.",
];

const checklist = [
  "Identify the core entities your business is genuinely authoritative about.",
  "Write a clear, definitional opening sentence for each primary entity on its page.",
  "Implement Organization/Person schema with sameAs to Wikipedia, Wikidata, and key profiles.",
  "Tag each article with about (primary entity) and mentions (related entities).",
  "Standardise entity names everywhere — site copy, schema, social profiles, citations.",
  "Build a pillar page per core entity, supported by pages covering its attributes and questions.",
  "Interlink the cluster so the relationships between entities are explicit and crawlable.",
  "Pursue relevant brand mentions and links that corroborate the entity's expertise.",
];

const faqs: Faq[] = [
  {
    q: "What is the difference between a keyword and an entity?",
    a: "A keyword is a string of text a user types. An entity is the real-world thing that string refers to — a person, place, product, or concept — which search engines store as a node with a stable identifier and a set of relationships. The keyword 'jaguar' is ambiguous; the entity is either the animal, the car brand, or the NFL team, each a distinct node in the Knowledge Graph.",
  },
  {
    q: "What is the Google Knowledge Graph?",
    a: "The Knowledge Graph is Google's database of entities and the relationships between them. It powers knowledge panels, disambiguation, and much of how Google understands queries. Each entity is assigned a machine identifier so the system can reason about the thing itself rather than the words used to describe it.",
  },
  {
    q: "How do I tell Google which entity my page is about?",
    a: "Define the entity clearly in your opening passage, use consistent naming, add Organization or Person schema with sameAs links to authoritative profiles such as Wikipedia and Wikidata, and use the about and mentions properties in your Article schema. Together these signals disambiguate which entity you mean and corroborate its identity.",
  },
  {
    q: "Do I need a Wikipedia page to do entity SEO?",
    a: "No. A Wikipedia or Wikidata entry strengthens an entity because it is an authoritative corroborating source, but you can build entity recognition through consistent naming, structured data with sameAs links to the profiles you do have, comprehensive topical coverage, and brand mentions from relevant sources.",
  },
  {
    q: "Is entity SEO the same as semantic SEO?",
    a: "Entity SEO is the core mechanism within semantic SEO. Semantic SEO is the broader practice of optimising for meaning, context, and topical authority; entity optimisation — making the things your content covers unambiguous and well-connected — is the foundation that the rest of semantic SEO and generative engine optimisation build on.",
  },
  {
    q: "How does entity SEO affect AI search and AI Overviews?",
    a: "AI search systems retrieve and synthesise answers around entities. Content that clearly defines entities, corroborates their identity, and covers their attributes comprehensively is easier for these systems to extract, trust, and cite — which is why entity optimisation directly supports AI Overview and AI-assistant visibility.",
  },
];

const articleSchema = buildArticleSchema({
  slug: SLUG,
  title: TITLE,
  description:
    "A practical guide to entity SEO and Google's Knowledge Graph: what entities are, the entity-attribute-value model, entity recognition, disambiguation signals, and entity-based content architecture.",
  published: PUBLISHED,
  category: "Semantic SEO",
  keywords: [
    "entity SEO",
    "knowledge graph",
    "entity-attribute-value",
    "entity optimisation",
    "semantic SEO",
    "entity recognition",
    "sameAs schema",
    "topical authority",
  ],
  wordCount: 2300,
  image: "/images/semantic-seo-services.png",
  about: [
    "Entity SEO",
    "Knowledge Graph",
    "Entity-Attribute-Value Model",
    "Semantic SEO",
    "Named Entity Recognition",
  ],
  faqs,
  breadcrumb: [
    { name: "Blog", path: "/blog" },
    { name: "Semantic SEO", path: "/blog/semantic-seo" },
    { name: "Entity SEO and the Knowledge Graph", path: `/blog/${SLUG}` },
  ],
});

const inlineLink = {
  textDecorationColor: "var(--faint)",
} as const;

export default function EntitySeoKnowledgeGraphPage() {
  return (
    <>
      <ArticleLayout
        schema={articleSchema}
        breadcrumb={[
          { name: "Blog", href: "/blog" },
          { name: "Semantic SEO", href: "/blog/semantic-seo" },
          { name: "Entity SEO & the Knowledge Graph", href: `/blog/${SLUG}` },
        ]}
        category="Semantic SEO"
        readTime="13 min read"
        date="21 June 2026"
        toc={toc}
        title={TITLE}
        intro="Entity SEO optimises content for the things search engines actually understand — people, places, products, and concepts — rather than the keyword strings used to describe them. This guide explains entities, the entity-attribute-value model, how Google's Knowledge Graph works, and the practical signals that make your entities unambiguous to both search and AI systems."
      >
        {/* Quick Answer */}
        <ArticleSection id="quick-answer">
          <QuickAnswer>
            Entity SEO is the practice of optimising content for entities — uniquely
            identifiable things like people, places, organisations, and concepts — instead
            of keyword strings. Search engines store entities as nodes in a knowledge graph,
            each with a stable identifier and a web of relationships. You optimise for them
            by defining entities clearly, signalling their identity with structured data and
            consistent naming, and covering their attributes across a connected set of pages.
          </QuickAnswer>
        </ArticleSection>

        {/* Hero image */}
        <div className="mb-14 rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/images/semantic-seo-services.png"
            alt="Entity SEO — optimising for entities and the Knowledge Graph"
            width={1200}
            height={630}
            className="w-full h-auto"
          />
        </div>

        {/* Key Takeaways */}
        <ArticleSection id="key-takeaways">
          <ArticleH2>Key Takeaways</ArticleH2>
          <KeyTakeaways items={keyTakeaways} />
        </ArticleSection>

        {/* What is an entity */}
        <ArticleSection id="what-is-entity">
          <ArticleH2>What Is an Entity?</ArticleH2>
          <div className="flex flex-col gap-4">
            <BodyText>
              An entity is a uniquely identifiable thing that exists independently of the
              words used to name it. A person, a city, a company, a product, an event, or an
              abstract concept can all be entities. Google&apos;s own definition is precise: an
              entity is &quot;a thing or concept that is singular, unique, well-defined and
              distinguishable.&quot;
            </BodyText>
            <BodyText>
              The important shift is that entities are language-independent. The company
              behind the iPhone is the same entity whether you write &quot;Apple,&quot; &quot;Apple
              Inc.,&quot; or &quot;the maker of the iPhone.&quot; A search engine that understands
              entities can connect all three phrases to a single node — and keep that node
              separate from the fruit of the same name.
            </BodyText>
            <BodyText>
              This is the &quot;strings to things&quot; shift that underpins modern search. For the
              broader context, see{" "}
              <Link href="/blog/semantic-seo/what-is-semantic-seo" className="text-white underline underline-offset-2" style={inlineLink}>
                what semantic SEO is and how to apply it
              </Link>
              .
            </BodyText>
          </div>
        </ArticleSection>

        {/* Entity vs keyword */}
        <ArticleSection id="entity-vs-keyword">
          <ArticleH2>Entities vs. Keywords</ArticleH2>
          <BodyText className="mb-6">
            Keyword optimisation and entity optimisation answer different questions. A keyword
            tells the engine which words appear on a page. An entity tells the engine which
            real-world thing the page is genuinely about — and crucially, removes ambiguity.
          </BodyText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}>
              <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem" }}>Keyword</p>
              <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                The string <em>&quot;jaguar speed&quot;</em>. Ambiguous on its own — the engine
                cannot tell whether you mean the animal, the car, or the team.
              </p>
            </div>
            <div className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}>
              <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem" }}>Entity</p>
              <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                <em>Jaguar (Panthera onca)</em> — a node with attributes (top speed, habitat,
                conservation status) and relationships (big cats, the Americas).
              </p>
            </div>
          </div>
          <BodyText className="mt-4">
            You do not abandon keywords — they remain how you discover what your audience asks.
            But you map those keywords onto the entities they reference, and then build content
            that makes those entities and their relationships explicit.
          </BodyText>
        </ArticleSection>

        {/* EAV model */}
        <ArticleSection id="eav-model">
          <ArticleH2>The Entity-Attribute-Value Model</ArticleH2>
          <BodyText className="mb-6">
            Machines represent entities using the entity-attribute-value (EAV) model: the thing,
            one of its properties, and the value of that property. Search engines accumulate
            millions of these triples to build a structured picture of each entity.
          </BodyText>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <table className="w-full" style={{ borderCollapse: "collapse", fontFamily: "var(--font-body)" }}>
              <thead>
                <tr style={{ background: "rgba(37,99,235,0.08)" }}>
                  {["Entity", "Attribute", "Value"].map((h) => (
                    <th key={h} className="text-left p-3 text-white font-heading font-semibold" style={{ fontSize: "0.85rem", borderBottom: "1px solid var(--border)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cape Town", "country", "South Africa"],
                  ["Cape Town", "famous landmark", "Table Mountain"],
                  ["Table Mountain", "type", "flat-topped mountain"],
                ].map((row, i, arr) => (
                  <tr key={row.join("-")} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 text-sm" style={{ color: j === 0 ? "#cfcfcf" : "var(--text-muted)", borderBottom: i === arr.length - 1 ? "none" : "1px solid var(--border)" }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BodyText className="mt-5">
            Notice how values are themselves entities — South Africa, Table Mountain — which
            then have their own attributes. This is what makes a knowledge graph a graph: a web
            of connected entities, not a flat list. Your job in entity SEO is to surface these
            attributes and relationships so the engine can confirm and extend what it already
            knows.
          </BodyText>
        </ArticleSection>

        {/* Knowledge Graph */}
        <ArticleSection id="knowledge-graph">
          <ArticleH2>How the Knowledge Graph Works</ArticleH2>
          <div className="flex flex-col gap-4">
            <BodyText>
              Google&apos;s Knowledge Graph is a database of entities and their relationships,
              launched in 2012 and expanded continuously since. When it recognises an entity, it
              assigns a stable machine identifier — so the entity persists even as the words
              around it change. The knowledge panels you see on the right of search results are
              the visible surface of this graph.
            </BodyText>
            <BodyText>
              Behind a query, the engine performs entity recognition: it parses the text, links
              recognised mentions to graph nodes, and disambiguates between candidates using
              context. &quot;Apple revenue&quot; resolves to the company; &quot;apple nutrition&quot;
              resolves to the fruit. The same recognition runs over your pages to decide which
              entities you cover and how authoritatively.
            </BodyText>
            <BodyText>
              The practical implication: you are not only writing for readers, you are feeding a
              graph. Content that confirms known attributes, adds well-supported new ones, and
              connects entities clearly is content the graph can absorb — and that absorption is
              what entity authority is built from.
            </BodyText>
          </div>
        </ArticleSection>

        {/* Signals */}
        <ArticleSection id="signals">
          <ArticleH2>How to Signal Entities to Search Engines</ArticleH2>
          <BodyText className="mb-3">
            Recognition depends on signals. These are the levers that tell an engine exactly
            which entity you mean and corroborate its identity:
          </BodyText>
          <ul className="flex flex-col gap-2">
            {entitySignals.map((item) => (
              <li key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}>
                <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "var(--faint)" }} />
                <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>{item}</p>
              </li>
            ))}
          </ul>
          <BodyText className="mt-5">
            Structured data is the most direct of these. A page that declares its primary entity
            with <strong className="text-white">about</strong>, references related ones with{" "}
            <strong className="text-white">mentions</strong>, and links identity with{" "}
            <strong className="text-white">sameAs</strong> gives the engine an unambiguous map
            rather than asking it to infer one.
          </BodyText>
        </ArticleSection>

        {/* Architecture */}
        <ArticleSection id="architecture">
          <ArticleH2>Entity-Based Content Architecture</ArticleH2>
          <div className="flex flex-col gap-4">
            <BodyText>
              Individual signals matter, but entity authority is earned at the site level. The
              architecture that produces it is a pillar page covering a core entity, supported by
              connected pages that each cover one of its attributes, questions, or related
              entities — all interlinked so the relationships are explicit.
            </BodyText>
            <BodyText>
              This is the same structure described in the{" "}
              <Link href="/blog/semantic-seo/semantic-seo-topical-map" className="text-white underline underline-offset-2" style={inlineLink}>
                semantic SEO topical map
              </Link>
              . A topical map is, in effect, an entity map: it lays out the entities you intend to
              own and the relationships between them, then assigns each to a page.
            </BodyText>
            <BodyText>
              Done well, this coverage compounds. Each supporting page confirms attributes of the
              core entity, the interlinking makes relationships crawlable, and the cluster as a
              whole signals that your site is a comprehensive, authoritative source on that
              entity — the precondition for both classic rankings and AI citation.
            </BodyText>
          </div>
        </ArticleSection>

        {/* Checklist */}
        <ArticleSection id="checklist">
          <ArticleH2>Entity SEO Checklist</ArticleH2>
          <ol className="flex flex-col gap-2 list-decimal pl-5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
            {checklist.map((item) => (
              <li key={item} className="pl-2">
                <span className="text-sm" style={{ lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ol>
        </ArticleSection>

        {/* FAQ */}
        <ArticleSection id="faq">
          <ArticleH2 className="mb-8">Frequently Asked Questions</ArticleH2>
          <FaqList faqs={faqs} />
        </ArticleSection>

        {/* Conclusion */}
        <ArticleSection id="conclusion" className="mb-0">
          <ArticleH2>Conclusion</ArticleH2>
          <div className="flex flex-col gap-4">
            <BodyText>
              Entity SEO is the foundation the rest of modern search optimisation stands on. Once
              your content is organised around clearly defined, well-corroborated entities, topical
              maps, schema, and generative engine optimisation all become extensions of the same
              idea: help machines understand the things you are an authority on.
            </BodyText>
            <BodyText>
              Start with the entities you genuinely know best, make them unambiguous, and build the
              connected coverage that proves it. That is what earns a place in the knowledge graph —
              and in the answers it increasingly powers.
            </BodyText>
          </div>
        </ArticleSection>
      </ArticleLayout>

      {/* Footer / CTA */}
      <section className="py-28" style={{ background: "#050505", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                Continue Reading
              </p>
              <ContinueReading
                links={[
                  { label: "Semantic SEO: What It Is and 10 Tips for Success", href: "/blog/semantic-seo/what-is-semantic-seo", desc: "The foundational primer on entities, topical authority, and how semantic SEO works." },
                  { label: "Semantic SEO Topical Map", href: "/blog/semantic-seo/semantic-seo-topical-map", desc: "Turn your entities into a connected content architecture that builds authority." },
                  { label: "Semantic SEO vs. Traditional SEO", href: "/blog/semantic-seo/semantic-seo-vs-traditional-seo", desc: "Why entity-first optimisation is replacing keyword-density tactics." },
                  { label: "How AI Search Engines Choose Sources", href: "/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources", desc: "How entity clarity feeds AI retrieval and citation." },
                ]}
              />
            </div>

            <div className="flex items-center">
              <ArticleCTA
                eyebrow="Build Entity Authority"
                title="Want your brand recognised as an entity, not just a set of keywords?"
                body="Entity mapping, structured data, topical architecture, and disambiguation signals — implemented end-to-end for South African and international brands."
                primary={{ label: "Book a Strategy Call", href: "/contact" }}
                secondary={{ label: "View Semantic SEO Services", href: "/semantic-seo-services" }}
              />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/semantic-seo" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
              Semantic SEO Consulting <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices
        heading="Connected SEO Solutions"
        links={[
          { href: "/semantic-seo", anchor: "semantic SEO consulting" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
          { href: "/technical-seo-services", anchor: "technical SEO services" },
          { href: "/generative-engine-optimisation", anchor: "generative engine optimisation" },
          { href: "/seo-services-south-africa", anchor: "SEO services in South Africa" },
          { href: "/blog/semantic-seo", anchor: "more semantic SEO guides" },
        ]}
      />
    </>
  );
}
