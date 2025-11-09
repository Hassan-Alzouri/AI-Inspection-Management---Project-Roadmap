import React, { useState } from "react";
import {
  CheckCircle,
  Circle,
  ChevronDown,
  ChevronRight,
  Clock,
  Users,
  Code,
  Database,
  Brain,
  Presentation,
} from "lucide-react";

const ProjectRoadmap = () => {
  const [expandedPhases, setExpandedPhases] = useState({
    phase1: true,
    phase2: false,
    phase3: false,
    phase4: false,
  });

  const togglePhase = (phase) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [phase]: !prev[phase],
    }));
  };

  const phases = [
    {
      id: "phase1",
      title: "Phase 1: Setup & Foundation",
      duration: "6 hours (Hours 0-6)",
      icon: <Database className="w-5 h-5" />,
      color: "bg-blue-500",
      tasks: [
        {
          title: "Hour 0-2: Project Initialization",
          owner: "All Team",
          subtasks: [
            "Team kickoff meeting - review strategy documents",
            "Create GitHub repository with README and license",
            "Set up project management board (GitHub Projects/Trello)",
            "Define Git workflow (branching strategy)",
            "Create Discord/Slack channel for communication",
            "Install development tools (VS Code, Python 3.9+, Node.js)",
            "Clone repository and verify all members have access",
          ],
        },
        {
          title: "Hour 2-4: Environment & Data Setup",
          owner: "Data Engineer + Backend Dev",
          subtasks: [
            "Data Engineer: Generate simulated ILI inspection dataset (500+ assets)",
            "Include fields: asset_id, inspection_date, wall_thickness, corrosion_rate, location, segment_id",
            "Create 2-3 years of historical inspection data",
            "Backend: Initialize FastAPI project structure",
            "Set up PostgreSQL database with Docker",
            "Create database schema and migrations",
            "Frontend: Initialize React project with Vite",
            "Install dependencies: Recharts, Tailwind CSS, Axios",
          ],
        },
        {
          title: "Hour 4-6: Initial Integration Test",
          owner: "Backend + Frontend",
          subtasks: [
            "Backend: Create first API endpoint (GET /assets)",
            "Seed database with sample data",
            "Test database queries return correct data",
            "Frontend: Create basic dashboard layout",
            "Make API call and display sample data",
            "Verify complete data flow: Database → API → Frontend",
            "Fix any connection or CORS issues",
            "Document API endpoints in README",
          ],
        },
      ],
    },
    {
      id: "phase2",
      title: "Phase 2: Core Development",
      duration: "18 hours (Hours 6-24)",
      icon: <Brain className="w-5 h-5" />,
      color: "bg-purple-500",
      tasks: [
        {
          title: "Hours 6-12: AI Models & Backend APIs",
          owner: "AI Engineer + Backend Dev",
          subtasks: [
            "AI Engineer: Build corrosion rate prediction model (Linear Regression → Gradient Boosting)",
            "Create anomaly detection using Isolation Forest or DBSCAN",
            "Implement risk scoring: Risk = Probability × Consequence",
            "Calculate Remaining Useful Life (RUL) predictions",
            "Train models on historical data and validate accuracy",
            "Backend: Create POST /predict/corrosion endpoint",
            "Create GET /anomalies/detect endpoint",
            "Create GET /assets/{id}/risk-score endpoint",
            "Create GET /inspection/schedule endpoint",
            "Implement error handling and logging",
          ],
        },
        {
          title: "Hours 6-12: Frontend Dashboard",
          owner: "Frontend Dev",
          subtasks: [
            "Build Asset Health Dashboard with grid layout",
            "Create color-coded risk level cards (Green/Yellow/Red)",
            "Implement asset list with search and filter",
            "Add corrosion trend chart using Recharts LineChart",
            "Create risk heatmap visualization",
            "Build notification panel for high-risk alerts",
            "Make dashboard responsive (mobile-friendly)",
            "Add loading states and error messages",
          ],
        },
        {
          title: "Hours 12-18: Feature Integration",
          owner: "All Team",
          subtasks: [
            "Frontend: Connect dashboard to backend APIs",
            "Display real-time risk scores on asset cards",
            "Show anomaly alerts with details",
            "Backend: Implement inspection scheduler logic",
            "Use API 580 risk matrix for interval calculation",
            "AI Engineer: Refine models based on test results",
            "Add confidence intervals to predictions",
            "Data Engineer: Create data validation pipeline",
            "Test end-to-end workflows",
          ],
        },
        {
          title: "Hours 18-24: Advanced Features",
          owner: "AI + Frontend",
          subtasks: [
            "AI Engineer: Build predictive alerts system",
            "Forecast when assets reach critical thresholds",
            "Implement multi-modal data fusion (if time allows)",
            "Frontend: Create interactive inspection calendar",
            "Build asset detail page with drill-down analytics",
            "Add historical trend comparison charts",
            "Implement PDF report generation",
            "Create export functionality for inspection plans",
            "Backend: Optimize API performance and caching",
          ],
        },
      ],
    },
    {
      id: "phase3",
      title: "Phase 3: Testing & Polish",
      duration: "12 hours (Hours 24-36)",
      icon: <Code className="w-5 h-5" />,
      color: "bg-green-500",
      tasks: [
        {
          title: "Hours 24-30: Testing & Bug Fixes",
          owner: "All Team",
          subtasks: [
            "Perform end-to-end testing of all features",
            "Test with different data scenarios (edge cases)",
            "Fix critical bugs blocking demo",
            "Optimize frontend performance (lazy loading)",
            "Improve UI/UX based on team feedback",
            "Add input validation on all forms",
            "Test on different browsers (Chrome, Firefox)",
            "Verify mobile responsiveness",
            "Check API error handling",
            "Run security checks (SQL injection, XSS)",
          ],
        },
        {
          title: "Hours 30-33: Demo Preparation",
          owner: "Domain Expert + All",
          subtasks: [
            "Write detailed demo script with timing",
            "Prepare sample data that tells a compelling story",
            "Create backup demo video (screen recording)",
            "Practice presentation with timer (7 minutes)",
            "Prepare answers to likely judge questions",
            "Set up demo environment (staging server)",
            "Test demo on presentation laptop",
            "Create printed handout with key metrics",
            "Prepare technical architecture diagram",
          ],
        },
        {
          title: "Hours 33-36: Final Polish",
          owner: "Frontend + Domain Expert",
          subtasks: [
            'Add "wow factor" animations and transitions',
            "Perfect the demo user flow",
            "Add company logo and branding",
            "Create compelling data visualizations",
            "Ensure all charts have proper labels",
            "Add tooltips and help text",
            "Polish presentation slides",
            "Get team rest before presentation",
            "Final git commit and deployment",
          ],
        },
      ],
    },
    {
      id: "phase4",
      title: "Phase 4: Presentation",
      duration: "7 minutes",
      icon: <Presentation className="w-5 h-5" />,
      color: "bg-red-500",
      tasks: [
        {
          title: "Presentation Structure",
          owner: "Domain Expert",
          subtasks: [
            "Minute 1: Hook - Show pipeline failure video, state $260K/hour cost",
            "Minute 2: Problem - Display ILI report, emphasize 15TB data underutilization",
            "Minutes 3-4: Live Demo - Upload file, show risk dashboard, drill down",
            "Minute 5: Technical Innovation - Explain physics-informed ML models",
            "Minute 6: Business Case - Show $4M annual savings calculation",
            "Minute 7: Close - Request $500K funding, invite questions",
          ],
        },
      ],
    },
  ];

  const fileStructure = {
    backend: [
      "/app",
      "  /models",
      "    corrosion_predictor.py",
      "    anomaly_detector.py",
      "    risk_calculator.py",
      "  /routes",
      "    assets.py",
      "    predictions.py",
      "    inspections.py",
      "  /database",
      "    models.py",
      "    schemas.py",
      "    connection.py",
      "  main.py",
      "  requirements.txt",
    ],
    frontend: [
      "/src",
      "  /components",
      "    Dashboard.jsx",
      "    AssetCard.jsx",
      "    RiskHeatmap.jsx",
      "    TrendChart.jsx",
      "    InspectionScheduler.jsx",
      "  /services",
      "    api.js",
      "  /utils",
      "    calculations.js",
      "  App.jsx",
      "  main.jsx",
      "package.json",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            AI Inspection Management System
          </h1>
          <p className="text-blue-100 text-lg">
            Complete Implementation Roadmap & Project Structure
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <Clock className="w-6 h-6 text-white mb-2" />
              <div className="text-2xl font-bold text-white">36 Hours</div>
              <div className="text-blue-100 text-sm">Total Timeline</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <Users className="w-6 h-6 text-white mb-2" />
              <div className="text-2xl font-bold text-white">5 Members</div>
              <div className="text-blue-100 text-sm">Team Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <Code className="w-6 h-6 text-white mb-2" />
              <div className="text-2xl font-bold text-white">4 Phases</div>
              <div className="text-blue-100 text-sm">Development</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <Database className="w-6 h-6 text-white mb-2" />
              <div className="text-2xl font-bold text-white">6 Features</div>
              <div className="text-blue-100 text-sm">MVP Scope</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6 mb-8">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-700"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-750"
                onClick={() => togglePhase(phase.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`${phase.color} p-3 rounded-lg`}>
                    {phase.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {phase.title}
                    </h2>
                    <p className="text-slate-400">{phase.duration}</p>
                  </div>
                </div>
                {expandedPhases[phase.id] ? (
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-slate-400" />
                )}
              </div>

              {expandedPhases[phase.id] && (
                <div className="p-6 pt-0 space-y-6">
                  {phase.tasks.map((task, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900 rounded-lg p-5 border border-slate-700"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {task.title}
                          </h3>
                          <p className="text-sm text-blue-400">
                            👤 {task.owner}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {task.subtasks.map((subtask, subIdx) => (
                          <li
                            key={subIdx}
                            className="flex items-start space-x-3 text-slate-300"
                          >
                            <Circle className="w-4 h-4 mt-1 flex-shrink-0 text-slate-500" />
                            <span className="text-sm">{subtask}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* File Structure */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2 text-blue-400" />
              Backend Structure
            </h3>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400">
              {fileStructure.backend.map((line, idx) => (
                <div key={idx} className="leading-relaxed">
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-purple-400" />
              Frontend Structure
            </h3>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-blue-400">
              {fileStructure.frontend.map((line, idx) => (
                <div key={idx} className="leading-relaxed">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">
            Technology Stack
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                Backend
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Python 3.9+ with FastAPI</li>
                <li>• PostgreSQL + SQLAlchemy</li>
                <li>• Pandas & NumPy</li>
                <li>• Docker for deployment</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                AI/ML
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• scikit-learn (XGBoost)</li>
                <li>• TensorFlow/PyTorch (LSTM)</li>
                <li>• Prophet (time series)</li>
                <li>• Isolation Forest (anomaly)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">
                Frontend
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• React 18 with Vite</li>
                <li>• Recharts for visualization</li>
                <li>• Tailwind CSS</li>
                <li>• Axios for API calls</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Critical Success Factors */}
        <div className="bg-slate-800 rounded-xl p-6 mt-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            ✅ Critical Success Factors
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Working live demo (not just slides)",
              "Real-time risk visualization with color coding",
              "Quantified business impact ($4M savings)",
              "Physics-informed ML models (not just black box)",
              "API 580/581 compliance for credibility",
              "Interactive drill-down capabilities",
              "Professional UI/UX that impresses judges",
              "Clear 7-minute pitch with timing",
            ].map((factor, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 text-slate-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRoadmap;
