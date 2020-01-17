(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1581:function(n,o,i){"use strict";i.r(o),o.default='import * as React from \'react\';\nimport {Section} from \'../../section/Section\';\nimport {ActionBarLoading} from \'../components/ActionBarLoading\';\nimport {BasicHeaderLoading} from \'../components/BasicHeaderLoading\';\nimport {PaginationLoading} from \'../components/PaginationLoading\';\nimport {TableLoading} from \'../components/TableLoading\';\nimport {Loading} from \'../Loading\';\n\nexport const LoadingExamples = () => (\n    <Section className="mb3" title="Loading examples">\n        <Section level={3} title="A table loading with 4 rows">\n            <div className="form-group">\n                <label className="form-control-label">Loading bouncing balls</label>\n                <div className="mt2 mod-border" style={{width: 400, height: 200}}>\n                    <Loading />\n                </div>\n            </div>\n            <div className="form-group">\n                <label className="form-control-label">Loading bouncing balls with full content</label>\n                <div className="mt2 mod-border" style={{width: 400, height: 400}}>\n                    <Loading fullContent />\n                </div>\n            </div>\n        </Section>\n        <Section level={3} title="Header loading">\n            <BasicHeaderLoading />\n        </Section>\n        <Section level={3} title="Action Bar loading">\n            <ActionBarLoading />\n        </Section>\n        <Section level={3} title="Table with 4 column in loading">\n            <TableLoading numberOfColumn={4} />\n        </Section>\n        <Section level={3} title="Table with 6 column and 5 row in loading">\n            <TableLoading numberOfColumn={6} numberOfRow={5} />\n        </Section>\n        <Section level={3} title="Table pagination in loading">\n            <PaginationLoading />\n        </Section>\n    </Section>\n);\n'}}]);
//# sourceMappingURL=490.bundle.js.map